import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, digite um email válido.",
  }),
  phone: z.string().min(8, {
    message: "Por favor, digite um telefone válido.",
  }),
  projectType: z.string().min(1, {
    message: "Por favor, selecione um tipo de projeto.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
  agreeToTerms: z.literal("true", {
    errorMap: () => ({ message: "Você deve concordar com a política de privacidade." }),
  }),
});

export default function WaitlistSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectType: "residential",
      message: "",
      agreeToTerms: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/waitlist", values);
      
      form.reset();
      
      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
        variant: "default",
      });
    } catch (error) {
      let errorMessage = "Algo deu errado. Por favor, tente novamente.";
      
      if (error instanceof Error) {
        // Check if it's an API response error
        if (error.message.includes("409")) {
          errorMessage = "Este email já está registrado.";
        } else {
          errorMessage = error.message;
        }
      }
      
      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-16">
          <h2 className="text-3xl font-light uppercase tracking-wide text-black mb-2">Contato</h2>
          <div className="w-16 h-px bg-black"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Formulário de contato */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm uppercase tracking-wider font-light text-gray-500">Nome Completo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Maria Silva" 
                          {...field}
                          className="border-gray-300 focus:border-black focus:ring-0 rounded-none h-10 font-light" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm uppercase tracking-wider font-light text-gray-500">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seu@email.com" 
                            type="email" 
                            {...field}
                            className="border-gray-300 focus:border-black focus:ring-0 rounded-none h-10 font-light" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm uppercase tracking-wider font-light text-gray-500">Telefone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(11) 99999-9999" 
                            {...field}
                            className="border-gray-300 focus:border-black focus:ring-0 rounded-none h-10 font-light" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm uppercase tracking-wider font-light text-gray-500">Tipo de Projeto</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-black focus:ring-0 rounded-none h-10 font-light">
                            <SelectValue placeholder="Selecione o tipo de projeto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residencial</SelectItem>
                          <SelectItem value="commercial">Comercial</SelectItem>
                          <SelectItem value="interior">Design de Interiores</SelectItem>
                          <SelectItem value="consulting">Consultoria</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm uppercase tracking-wider font-light text-gray-500">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva seu projeto e o que você está buscando..." 
                          className="min-h-40 resize-none border-gray-300 focus:border-black focus:ring-0 rounded-none font-light"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value === "true"}
                          onCheckedChange={(checked) => {
                            field.onChange(checked ? "true" : undefined);
                          }}
                          className="rounded-none data-[state=checked]:bg-black data-[state=checked]:border-black"
                        />
                      </FormControl>
                      <div className="leading-none">
                        <FormLabel className="font-light text-gray-600">
                          Concordo com a <a href="#" className="text-black underline hover:no-underline">Política de Privacidade</a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 border border-black text-white bg-black uppercase text-sm tracking-wider font-light hover:bg-white hover:text-black transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>
              </form>
            </Form>
          </motion.div>
          
          {/* Informações de contato */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-light text-black mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-black mr-4 mt-0.5" />
                    <div>
                      <p className="font-light text-gray-800">Email</p>
                      <p className="text-gray-600 font-light mt-1">contato@marianamaria.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-black mr-4 mt-0.5" />
                    <div>
                      <p className="font-light text-gray-800">Telefone</p>
                      <p className="text-gray-600 font-light mt-1">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-black mr-4 mt-0.5" />
                    <div>
                      <p className="font-light text-gray-800">Endereço</p>
                      <p className="text-gray-600 font-light mt-1">
                        Av. Paulista, 1000<br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-black mb-6">Horário de Atendimento</h3>
                <div className="space-y-3 font-light text-gray-600">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-black mb-6">Redes Sociais</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-600 font-light hover:text-black transition-colors uppercase text-sm tracking-wider">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-600 font-light hover:text-black transition-colors uppercase text-sm tracking-wider">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-600 font-light hover:text-black transition-colors uppercase text-sm tracking-wider">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
