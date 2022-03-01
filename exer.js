function run() {
    let s = document.getElementById("input_argument").value;

    let string = s => [...s]
    .filter(c=>!(s.split(c)
    .length-2))[0] || `None` ;

    document.getElementById("output").innerHTML = string(s);
}