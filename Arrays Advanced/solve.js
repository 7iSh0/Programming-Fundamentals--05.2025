// push() dobavq element na kraq na masiva

// pop() premahva element na kraq na masiva 

// unshift() dobavq element v nachaloto na masiva

// shift() premahva element v nachaloto na masiva

// includes() proverqvam dali v masiva ima daden element

// indexOf() proverqvam dali ima element v masiva

// slice(2) - reje 2q elemnt ot originalniq masiv i syzdava nov masiv
// slice() - copira celiq masiv

// splice - dobavq, iztriva i vrushta elementi v nov promenen masiv
// splice(1, 2) - vzema 1 element i iztriva 2
// splice(1, 2, 'a', 'b') - vzema 1 element, iztriva 2 i dobavq 'a' i 'b'

// map() - suzdava nov masiv kato slaga funkciq na vseki element
// map(Number) - slaga Number na vseki element

// filter() - suzdava nov masiv ot elemnti koito izpylnqvat yslovie
// num.filter(x => x % 2 === 0) - suzdava masiv ot chetni chisla
// num.filter((x, i) => i % 2 === 0) - suzdava masiv ot chetni indexi
// names.filter(name => name.length <= 5) - suzdava masiv ot imena s do 5 simvola

// sort() - sortira kato stringove v azbuchen red
// sort(compareFunction) - sortira po dadena funkciq 
// sort((a, b) => a.length - b.length) - sortira po dyljina na elementite
// sort((a, b) => a - b) - sortira po chisla
// .sort((a, b) => a.localeCompare(b) - sortira po malki i golemi bukvi