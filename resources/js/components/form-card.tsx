import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';

export default function FormCard({
                                     children,
                                     title,
                                     description = null,
                                     submitLabel = 'Guardar',
                                     backLabel = 'Volver',
                                     submitIcon = <Save className="mr-2 h-4 w-4" />,
                                     backIcon = <ArrowLeft className="mr-2 h-4 w-4" />,
                                     onSubmit,
                                     onBack = () => window.history.back(),
                                     processing = false,
                                     footer = null,
                                     className = '',
                                     showBackButton = true
                                 }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <Card className={`w-full max-w-2xl mx-auto dark:bg-gray-800 dark:border-gray-700 ${className}`}>
            <CardHeader>
                <CardTitle className="text-xl dark:text-white">{title}</CardTitle>
                {description && (
                    <CardDescription className="dark:text-gray-400">{description}</CardDescription>
                )}
            </CardHeader>

            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    {children}
                </CardContent>

                <CardFooter className="flex justify-between py-6">
                    {showBackButton && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onBack}
                            disabled={processing}
                            className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                        >
                            {backIcon}
                            {backLabel}
                        </Button>
                    )}

                    {footer || (
                        <div className={showBackButton ? 'ml-auto' : 'w-full flex justify-end'}>
                            <Button
                                type="submit"
                                disabled={processing}
                            >
                                {submitIcon}
                                {submitLabel}
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </form>
        </Card>
    );
}
