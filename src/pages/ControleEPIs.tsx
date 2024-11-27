import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Plus, Trash2 } from 'lucide-react';

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
    setRelatorio(relatorio.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Controle de EPIs</CardTitle>
          <CardDescription>Gerencie o estoque de Equipamentos de Proteção Individual.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdd} className="space-y-4">
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
        </CardContent>
        <CardFooter>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>EPI</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {relatorio.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.epi}</TableCell>
                  <TableCell>{item.quantidade}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ControleEPIs;
