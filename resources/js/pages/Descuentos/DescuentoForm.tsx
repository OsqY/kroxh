import { useForm } from '@inertiajs/react';
import FormCard from '@/components/form-card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function DescuentoForm({ descuento = null }) {
    const { data, setData, errors, post, put, processing } = useForm({
        nombre: descuento?.nombre ? descuento.nombre : '',
        descripcion: descuento?.descripcion ? descuento.descripcion : '',
        valor_porcentaje: descuento?.valor_porcentaje ? descuento.valor_porcentaje : '',
        fecha_inicio: descuento?.fecha_inicio ? descuento.fecha_inicio : '',
        fecha_fin: descuento?.fecha_fin ? descuento.fecha_fin : '',
        minimo_compra: descuento?.minimo_compra ? descuento.minimo_compra : '',
        codigo: descuento?.codigo ? descuento.codigo : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (descuento) {
            put(route('descuentos.update', descuento.id));
        } else {
            post(route('descuentos.store'));
        }
    };

    return (
        <FormCard
            title={`${descuento ? 'Editar' : 'Crear'} Descuento`}
            onSubmit={handleSubmit}
            processing={processing}
            submitLabel={descuento ? 'Actualizar' : 'Guardar'}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="nombre" className="dark:text-gray-200">Nombre</Label>
                    <Input
                        id="nombre"
                        value={data.nombre}
                        onChange={e => setData('nombre', e.target.value)}
                        placeholder="Nombre de la descuento"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.nombre ? 'border-red-500 dark:border-red-500' : ''}`}
                    />
                    {errors.nombre && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.nombre}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="descripcion" className="dark:text-gray-200">Descripción</Label>
                    <Textarea
                        id="descripcion"
                        value={data.descripcion}
                        onChange={e => setData('descripcion', e.target.value)}
                        placeholder="Descripción del descuento"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.descripcion ? 'border-red-500 dark:border-red-500' : ''}`}
                        rows={3}
                    />
                    {errors.descripcion && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.descripcion}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fecha_inicio" className="dark:text-gray-200">Fecha Inicio</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-[240px] justify-start text-left font-normal',
                                    !data.fecha_inicio && 'text-muted-foreground'
                                )}
                            >
                                <CalendarIcon />
                                {data.fecha_inicio ? format(data.fecha_inicio, 'PPP') : <span>Elija una fecha</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={data.fecha_inicio}
                                onSelect={e => setData('fecha_inicio', e)}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                    {errors.fecha_inicio && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.fecha_inicio}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fecha_fin" className="dark:text-gray-200">Fecha Fin</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-[240px] justify-start text-left font-normal',
                                    !data.fecha_fin && 'text-muted-foreground'
                                )}
                            >
                                <CalendarIcon />
                                {data.fecha_fin ? format(data.fecha_fin, 'PPP') : <span>Elija una fecha</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={data.fecha_fin}
                                onSelect={e => setData('fecha_fin', e)}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                    {errors.fecha_inicio && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.fecha_inicio}</AlertDescription>
                        </Alert>
                    )}
                </div>


                <div className="space-y-2">
                    <Label htmlFor="valor_porcentaje" className="dark:text-gray-200">Valor Porcentaje (%)</Label>
                    <Input
                        id="valor_porcentaje"
                        type="number"
                        step="1"
                        value={data.valor_porcentaje}
                        onChange={e => setData('valor_porcentaje', e.target.value)}
                        placeholder="0"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.precio ? 'border-red-500 dark:border-red-500' : ''}`}
                    />
                    {errors.valor_pocentaje && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.valor_porcentaje}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="minimo_compra" className="dark:text-gray-200">Mínimo de compra</Label>
                    <Input
                        id="minimo_compra"
                        type="number"
                        step="1"
                        value={data.minimo_compra}
                        onChange={e => setData('minimo_compra', e.target.value)}
                        placeholder="0"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.minimo_compra ? 'border-red-500 dark:border-red-500' : ''}`}
                    />
                    {errors.minimo_compra && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.minimo_compra}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="codigo" className="dark:text-gray-200">Código</Label>
                    <Input
                        id="codigo"
                        value={data.codigo}
                        onChange={e => setData('codigo', e.target.value)}
                        placeholder="FJHU9128912"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.codigo ? 'border-red-500 dark:border-red-500' : ''}`}
                    />
                    {errors.codigo && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.codigo}</AlertDescription>
                        </Alert>
                    )}
                </div>

            </div>
        </FormCard>
    );
}
