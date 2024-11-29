import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Upload, Trash2 } from "lucide-react";

interface Documento {
  id: number;
  nome: string;
  tipo: string;
  arquivo: string;
}

const GestaoDocumentos: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [documentos, setDocumentos] = useState<Documento[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nome && tipo && arquivo) {
      setDocumentos([
        ...documentos,
        { id: Date.now(), nome, tipo, arquivo: arquivo.name },
      ]);
      setNome("");
      setTipo("");
      setArquivo(null);
    }
  };

  const handleDelete = (id: number) => {
    setDocumentos(documentos.filter((doc) => doc.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Gestão de Documentos</h1>
          <p className="text-sm text-gray-600">
            Gerencie os documentos dos colaboradores.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="mb-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome do Colaborador</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo de Documento</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="certificado">Certificado</SelectItem>
                  <SelectItem value="comprovante">
                    Comprovante de Experiência
                  </SelectItem>
                  <SelectItem value="documento">Documento Pessoal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="arquivo">Arquivo</Label>
            <Input
              id="arquivo"
              type="file"
              onChange={(e) => setArquivo(e.target.files?.[0] || null)}
              required
            />
          </div>
          <Button type="submit">
            <Upload className="mr-2 h-4 w-4" /> Enviar Documento
          </Button>
        </form>
        <Table className="w-full">
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Arquivo</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentos.map((doc) => (
              <TableRow key={doc.id} className="hover:bg-gray-50">
                <TableCell>{doc.nome}</TableCell>
                <TableCell>{doc.tipo}</TableCell>
                <TableCell>{doc.arquivo}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(doc.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GestaoDocumentos;
