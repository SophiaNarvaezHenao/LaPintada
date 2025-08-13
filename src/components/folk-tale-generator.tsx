'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2, BookHeart, Sparkles } from 'lucide-react';
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
import { ScrollArea } from '@/components/ui/scroll-area';

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
        title: 'Error al generar el cuento',
        description: 'Hubo un problema con la IA. Por favor, inténtalo de nuevo más tarde.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="folktale" className="bg-transparent">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold">Crea tu Propio Cuento</h2>
            <p className="mt-2 text-lg">
              Elige los ingredientes y deja que la IA teja una historia única inspirada en La Pintada.
            </p>
          </div>
          <Card className="shadow-xl rounded-2xl bg-card/80 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="tone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground/80">Tono del Cuento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-secondary border-white/20 text-secondary-foreground">
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
                        <FormLabel className="text-primary-foreground/80">Personaje Principal</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Una sabia abuela" {...field} className="bg-secondary border-white/20 text-secondary-foreground" />
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
                        <FormLabel className="text-primary-foreground/80">Moraleja</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: El valor de la honestidad" {...field} className="bg-secondary border-white/20 text-secondary-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generando Magia...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Crear mi Cuento
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center min-h-[500px] lg:min-h-full">
          {isLoading ? (
            <div className="text-center">
              <Loader2 className="mx-auto h-16 w-16 animate-spin" />
              <p className="mt-4 text-2xl">Tejiendo una nueva historia...</p>
              <p>Esto puede tardar unos segundos.</p>
            </div>
          ) : tale ? (
            <Card className="w-full h-[550px] shadow-2xl animate-in fade-in-50 duration-500 rounded-2xl bg-card/80 backdrop-blur-sm border-white/20 overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-3xl text-primary-foreground">{tale.title}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-base max-w-none text-card-foreground/90 flex-grow">
                <ScrollArea className="h-[400px] pr-4">
                  <p className="whitespace-pre-wrap">{tale.story}</p>
                </ScrollArea>
              </CardContent>
            </Card>
          ) : (
             <div className="text-center p-8 border-2 border-dashed border-border rounded-2xl w-full h-full flex flex-col justify-center items-center bg-background/50">
                <BookHeart className="mx-auto h-20 w-20 text-primary/80" />
                <p className="mt-4 text-2xl">Tu cuento aparecerá aquí</p>
                <p className="text-lg">Completa el formulario y dale vida a una leyenda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
