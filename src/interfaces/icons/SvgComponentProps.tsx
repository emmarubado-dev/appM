interface SvgComponentProps {
    color?: string;
    size?: number;
    [key: string]: any;  // Esto permite que el componente reciba cualquier otra prop adicional (similar a ...props)
  }

export { SvgComponentProps };