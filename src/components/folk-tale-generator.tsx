'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2, BookHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateFolkTale, type GenerateFolkTaleOutput } from '@/ai/flows/generate-folk-tale';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  tone: z.string().min(1, 'El tono es requerido.'),
  mainCharacter: z.string().min(3, 'El personaje debe tener al menos 3 caracteres.'),
  moral: z.string().min(5, 'La moraleja debe tener al menos 5 caracteres.'),
});

export default function FolkTaleGenerator() {
  const [tale, setTale] = useState<GenerateFolkTaleOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tone: 'Cálido y acogedor',
      mainCharacter: 'Un joven arriero valiente',
      moral: 'La importancia de la comunidad',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setTale(null);
    try {
      const result = await generateFolkTale(data);
      setTale(result);
    } catch (error) {
      console.error('Error generating folk tale:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo generar el cuento. Inténtalo de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="folktale" className="py-16 bg-secondary/30">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">Cuentos de la Tierra</h2>
          <p className="text-foreground/80 mb-6">
            Crea tu propio cuento popular inspirado en La Pintada. Elige el tono, el protagonista y la moraleja, y deja que la magia de la inteligencia artificial teja una historia única para ti.
          </p>
          <Card className="shadow-lg rounded-lg">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="tone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tono del Cuento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un tono" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Cálido y acogedor">Cálido y acogedor</SelectItem>
                            <SelectItem value="Misterioso y antiguo">Misterioso y antiguo</SelectItem>
                            <SelectItem value="Humorístico y ligero">Humorístico y ligero</SelectItem>
                            <SelectItem value="Trágico y conmovedor">Trágico y conmovedor</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mainCharacter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Personaje Principal</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Una sabia abuela" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="moral"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Moraleja</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: El valor de la honestidad" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generando...
                      </>
                    ) : (
                      <>
                        <BookHeart className="mr-2 h-4 w-4" />
                        Crear mi Cuento
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center min-h-[400px] lg:min-h-full">
          {isLoading ? (
            <div className="text-center text-foreground/80">
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 font-headline">Tejiendo una nueva historia...</p>
            </div>
          ) : tale ? (
            <Card className="w-full h-full shadow-lg animate-in fade-in-50 duration-500 rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline text-primary">{tale.title}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-foreground/90">
                <p className="whitespace-pre-wrap">{tale.story}</p>
              </CardContent>
            </Card>
          ) : (
             <div className="text-center text-foreground/60 p-8 border-2 border-dashed border-border rounded-lg w-full h-full flex flex-col justify-center items-center">
                <BookHeart className="mx-auto h-16 w-16" />
                <p className="mt-4 font-headline text-lg">Tu cuento aparecerá aquí</p>
                <p className="text-sm">Completa el formulario y dale vida a una leyenda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
