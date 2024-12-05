export const replacePlaceholders = (str?: React.ReactNode | undefined, args?: string[]) => {

    if (!args?.length) return str;
  
    if (str instanceof Array) {
      str.map(element =>
        element?.type?.name === 'Text'
          ? replacePlaceholders(element.props.children, element.props.args)
          : element
      )
    }
  
    if (typeof str === 'string') {
      const regex = /\{\{([^\}]+)\}\}/g;
  
      return str.replace(regex, (match, placeholder) => {
        const index = parseInt(placeholder, 10);
        if (Number.isNaN(index) || index < 0 || index >= args.length) {
          return match;
        }
        return args[index];
      });
    }
  };