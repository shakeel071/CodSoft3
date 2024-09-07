const text = document.getElementById("textBox");
        var fno = 0, sno = 0;
        var opr = "";
        var ans = 0;

        function display(val) {
            if (text.value == 0 && !text.value.includes(".")) {
                text.value = val;
            } else {
                text.value += val;
            }
        }

        function clearDisplay() {
            text.value = 0;
            fno = 0;
            sno = 0;
            ans = 0;
            opr = "";
        }
        function setOperator(op) {
            if (opr == "") {
                fno = text.value;
                opr = op;
                text.value = 0;
            }
        }
function setDot(){
            if(text.value.toString().includes(".")==0){
             text.value+="."
            }
        }
        function calculation() {
            sno = text.value;
            if (opr == "+") {
                ans = Number(fno) + Number(sno);
            } else if (opr == "-") {
                ans = Number(fno) - Number(sno);
            } else if (opr == "*") {
                ans = Number(fno) * Number(sno);
            } else if (opr == "/") {
                if (sno == 0) {
                    ans = "DIVISION BY ZERO ERROR";
                } else {
                    ans = Number(fno) / Number(sno);
                }
            }
            text.value = ans;
            fno = ans;
            sno = 0;
            opr = "";
        }