const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deepjol'}

];

const names = student.map( s =>s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 30);
const bigger1 = student.find(s => s.id > 30);

console.log(bigger1);
