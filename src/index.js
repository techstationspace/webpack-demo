function component() {
    const element = document.createElement('div');
    //the format function is defined by  <script src="https://unpkg.com/browse/date-fns@2.14.0"></script>
    element.innerHTML = dateFns.format(new Date(2014, 1, 11), 'MM/DD/YYYY')
    return element;
}
document.body.appendChild(component());