import FormContainer from '@/components/form-container';
import TipoProductoForm from '@/pages/TipoProducto/TipoProductoForm';

export default function Edit({ tipoProducto }) {
    return (
        <FormContainer
            title="Editar Tipo de Producto"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Tipos de Productos', href: route('tipo-productos.index') },
                { label: 'Editar Tipo de Producto' }
            ]}
        >
            <TipoProductoForm tipoProducto={tipoProducto} />
        </FormContainer>
    );
}
