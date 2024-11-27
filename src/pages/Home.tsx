import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, FileText, Users } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Agilidade e Segurança na Contratação</h1>
          <p className="text-xl md:text-2xl mb-8">Soluções sob medida para sua obra.</p>
          <Button size="lg" variant="secondary">
            Saiba Mais <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Mão de Obra Especializada", description: "Profissionais qualificados para diversas áreas da construção civil e manutenção industrial." },
              { icon: Shield, title: "Gerenciamento de EPIs", description: "Controle completo de EPIs para garantir segurança e conformidade nas obras." },
              { icon: FileText, title: "Gestão de Documentos", description: "Organização de toda a documentação necessária para contratação e liberação de colaboradores." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Por Que Escolher a Nossa Empresa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Agilidade", description: "Reduzimos o tempo de contratação e liberação de profissionais." },
              { title: "Eficiência", description: "Gestão eficiente de documentos e EPIs, reduzindo custos operacionais." },
              { title: "Segurança", description: "Garantimos conformidade com normas trabalhistas, reduzindo riscos legais." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <Card className="max-w-lg mx-auto">
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Sua mensagem" rows={4} />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

