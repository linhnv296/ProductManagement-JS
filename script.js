let Products = function() {
    this.products = ["SamSung","Iphone"];
    this.showhtml = document.getElementById("boardproduct");
    let htmledit = document.getElementById("editpro");
    this.showProducts = function () {
        let html = "<table><tr class='header'><td>STT</td><td>PRODUCT NAME</td><td>EDIT</td><td>DELETE</td></tr>";
        for (let i = 0; i < this.products.length; i++){
            html += "<tr><td>"+ eval(i+1)+"</td>";
            html += "<td>"+this.products[i]+"</td>";
            html += "<td><button value= "+i+" onclick='products.editProducts(this.value)'>Edit</button></td>";
            html += "<td><button value= "+i+" onclick='products.deleteProducts(this.value)'>Delete</button></td></tr>";
        }
        html += "</table>"
        this.showhtml.innerHTML = html;
        document.getElementById("inputaddPro").value ="";

    };
    this.addProducts = function () {
        this.valueInput = document.getElementById("inputaddPro").value;
        if (this.valueInput !== ""){
            this.products.push(this.valueInput);
            console.log(this.products);
        }
        this.showProducts()
    };
    this.editProducts = function (value) {
        this.valueedit = value;
        console.log(this.valueedit);
        let htmleditvalue = "<input type='text' id='newvalue' value=" + this.products[this.valueedit] + "><button value="+this.valueedit+" onclick="+"products.changeProduct(this.value)"+">Done</button>";
        htmledit.innerHTML = htmleditvalue;
    };
    this.changeProduct = function (value) {
        this.idvalue = value;
        let newvalueedit = document.getElementById("newvalue").value;
        this.products[this.idvalue] = newvalueedit;
        this.showProducts()
        htmledit.innerHTML = "";
    };
    this.deleteProducts = function (value) {
        this.value = value;
        this.products.splice(this.value,1);
        this.showProducts()
    };
}
let products = new Products();
products.showProducts();