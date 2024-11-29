import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Plus, Trash2 } from "lucide-react";

interface EPI {
  id: number;
  epi: string;
  quantidade: number;
}

const ControleEPIs: React.FC = () => {
  const [epi, setEpi] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(0);
  const [relatorio, setRelatorio] = useState<EPI[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (epi && quantidade > 0) {
      setRelatorio([...relatorio, { id: Date.now(), epi, quantidade }]);
      setEpi("");
      setQuantidade(0);
    }
  };

  const handleDelete = (id: number) => {
    setRelatorio(relatorio.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Controle de EPIs</h1>
          <p className="text-sm text-gray-600">
            Gerencie o estoque de Equipamentos de Proteção Individual.
          </p>
        </header>
        <form onSubmit={handleAdd} className="mb-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="epi">EPI</Label>
              <Input
                id="epi"
                value={epi}
                onChange={(e) => setEpi(e.target.value)}
                placeholder="Nome do EPI"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantidade">Quantidade</Label>
              <Input
                id="quantidade"
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                min="1"
                required
              />
            </div>
          </div>
          <Button type="submit">
            <Plus className="mr-2 h-4 w-4" /> Adicionar EPI
          </Button>
        </form>
        <Table className="w-full">
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead>EPI</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {relatorio.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>{item.epi}</TableCell>
                <TableCell>{item.quantidade}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
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

export default ControleEPIs;
