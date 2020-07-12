import * as dateFns from 'https://cdn.pika.dev/date-fns@^2.14.0';

function component() {
    const element = document.createElement('div');
    //the format function is defined by  <script src="https://unpkg.com/browse/date-fns@2.14.0"></script>
    element.innerHTML = dateFns.format(new Date(2014, 1, 11), 'mm/dd/yyyy')
    return element;
}
document.body.appendChild(component());