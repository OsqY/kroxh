import TipoProductoForm from '@/pages/TipoProducto/TipoProductoForm';
import FormContainer from '@/components/form-container';

export default function Create() {

    return (
        <FormContainer
            title="Crear Tipo de Producto"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Tipos de Productos', href: route('tipo-productos.index') },
                { label: 'Crear Tipo de Producto' }
            ]}
        >
            <TipoProductoForm />
        </FormContainer>
    );
}
