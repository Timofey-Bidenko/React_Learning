const Form = ({title, subtitle, text, children}) => {
    return (
      <main>
        <h1>{title}</h1>
        <p class="subtitle">{subtitle}</p>
        <p class="welcome">{text}</p>
        {children}
      </main>
    );
}

export default Form;