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
  prompt: `You are a master storyteller specializing in folk tales from La Pintada, Colombia.

  Craft a folk tale with the following characteristics:
  - Tone: {{{tone}}}
  - Main Character: {{{mainCharacter}}}
  - Moral: {{{moral}}}

  The folk tale should be set in or related to La Pintada, incorporating elements of the local culture, traditions, and landscape.

  Ensure the story is engaging, and thought-provoking, and reflects the values of the community.

  Return the output as JSON with a title and story field. Do not include any preamble in the response.

  Here's an example output:
  {
    "title": "The Legend of the Whispering River",
    "story": "In the heart of La Pintada, where the mountains kiss the sky, lived a young boy named Mateo..."
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
