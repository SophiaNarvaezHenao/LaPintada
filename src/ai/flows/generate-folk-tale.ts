'use server';

/**
 * @fileOverview Folk tale generator for La Pintada.
 *
 * - generateFolkTale - A function that generates folk tales related to La Pintada.
 * - GenerateFolkTaleInput - The input type for the generateFolkTale function.
 * - GenerateFolkTaleOutput - The return type for the generateFolkTale function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFolkTaleInputSchema = z.object({
  tone: z
    .string()
    .default('Warm and inviting')
    .describe('The tone of the folk tale.'),
  mainCharacter: z
    .string()
    .default('A brave young boy')
    .describe('The main character of the folk tale.'),
  moral: z
    .string()
    .default('The importance of community')
    .describe('The moral of the folk tale.'),
});
export type GenerateFolkTaleInput = z.infer<typeof GenerateFolkTaleInputSchema>;

const GenerateFolkTaleOutputSchema = z.object({
  title: z.string().describe('The title of the folk tale.'),
  story: z.string().describe('The generated folk tale.'),
});
export type GenerateFolkTaleOutput = z.infer<typeof GenerateFolkTaleOutputSchema>;

export async function generateFolkTale(input: GenerateFolkTaleInput): Promise<GenerateFolkTaleOutput> {
  return generateFolkTaleFlow(input);
}

const folkTalePrompt = ai.definePrompt({
  name: 'folkTalePrompt',
  input: {schema: GenerateFolkTaleInputSchema},
  output: {schema: GenerateFolkTaleOutputSchema},
  prompt: `Eres un maestro narrador especializado en cuentos populares de La Pintada, Colombia.

  Elabora un cuento popular con las siguientes características:
  - Tono: {{{tone}}}
  - Personaje Principal: {{{mainCharacter}}}
  - Moraleja: {{{moral}}}

  El cuento debe estar ambientado o relacionado con La Pintada, incorporando elementos de la cultura, las tradiciones y el paisaje local.

  Asegúrate de que la historia sea atractiva, que invite a la reflexión y que refleje los valores de la comunidad.

  **El cuento y el título deben estar escritos en español.**

  Devuelve el resultado en formato JSON con un campo "title" y un campo "story". No incluyas ningún preámbulo en la respuesta.

  Aquí tienes un ejemplo de salida:
  {
    "title": "La leyenda del río susurrante",
    "story": "En el corazón de La Pintada, donde las montañas besan el cielo, vivía un joven llamado Mateo..."
  }`,
});

const generateFolkTaleFlow = ai.defineFlow(
  {
    name: 'generateFolkTaleFlow',
    inputSchema: GenerateFolkTaleInputSchema,
    outputSchema: GenerateFolkTaleOutputSchema,
  },
  async input => {
    const {output} = await folkTalePrompt(input);
    return output!;
  }
);
