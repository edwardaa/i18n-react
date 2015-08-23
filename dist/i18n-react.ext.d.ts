declare module 'i18n-react' {
  import React = require('react');
  class MDText extends React.Component<any, {}> {
    constructor(tag?: string, props?: any);
    tag: string;
    static texts: any;
    static setTexts: (t: any) => any;
    static format(text: string, options?: any): React.ReactNode;
    static translate(key: string, options?: any): React.ReactNode;
    shouldComponentUpdate(nextProps: any): boolean;
    render(): React.ReactElement<any>;
    static p: any;
    static span: any;
    static div: any;
    static button: any;
    static a: any;
  }
  export = MDText;
}