//import React from "react";
import { ArrowRight, Shield, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="mx-auto flex justify-center flex-col overflow-hidden w-full">
      <section className="relative min-h-[600px] lg:h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4">
        <div className="text-center z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Agilidade e Segurança na Contratação
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Soluções sob medida para sua obra.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="inline-flex items-center"
          >
            Saiba Mais <ArrowRight className="ml-2" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 px-4">
        <h2 className="text-xl lg:text-2xl font-bold text-center mb-8 text-blue-800">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: Users,
              title: "Mão de Obra Especializada",
              description:
                "Profissionais qualificados para diversas áreas da construção civil e manutenção industrial.",
            },
            {
              icon: Shield,
              title: "Gerenciamento de EPIs",
              description:
                "Controle completo de EPIs para garantir segurança e conformidade nas obras.",
            },
            {
              icon: FileText,
              title: "Gestão de Documentos",
              description:
                "Organização de toda a documentação necessária para contratação e liberação de colaboradores.",
            },
          ].map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle className="text-blue-800 text-lg">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-blue-600 text-white px-4">
        <h2 className="text-xl lg:text-2xl font-bold text-center mb-8">
          Por Que Escolher a Nossa Empresa?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Agilidade",
              description:
                "Reduzimos o tempo de contratação e liberação de profissionais.",
            },
            {
              title: "Eficiência",
              description:
                "Gestão eficiente de documentos e EPIs, reduzindo custos operacionais.",
            },
            {
              title: "Segurança",
              description:
                "Garantimos conformidade com normas trabalhistas, reduzindo riscos legais.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-blue-500 hover:bg-blue-400 transition-colors border-0"
            >
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-blue-50 text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 px-4">
        <h2 className="text-xl lg:text-2xl font-bold text-center mb-8 text-blue-800">
          Entre em Contato
        </h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Sua mensagem" rows={4} />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Enviar Mensagem
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
