class Printer{
    print(){
        console.log("i am a printer");
    }
}

class ColorPrinter extends Printer{
    print(){
        console.log("i am a color printer"); //method overriding
    }
}

const printer = new Printer();
printer.print();

const colorPrinter = new ColorPrinter();
colorPrinter.print();