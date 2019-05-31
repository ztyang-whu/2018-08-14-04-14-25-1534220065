module.exports = function main(x) {
    var result="";
    for(var j=0;j<x.length;j++){
	switch(x.charAt(j)){
	    case "0":result+="._. ";break;
	    case "1":result+="... ";break;
	    case "2":result+="._. ";break;
	    case "3":result+="._. ";break;
	    case "4":result+="... ";break;
            case "5":result+="._. ";break;
            case "6":result+="._. ";break;
	    case "7":result+="._. ";break;
	    case "8":result+="._. ";break;
	    case "9":result+="._. ";break;
	}
    }
    result=result.substring(0,result.length-1);
    result+="\n";
    for(var j=0;j<x.length;j++){
	switch(x.charAt(j)){
	    case "0":result+="|.| ";break;
	    case "1":result+="..| ";break;
	    case "2":result+="._| ";break;
	    case "3":result+="._| ";break;
	    case "4":result+="|_| ";break;
	    case "5":result+="|_. ";break;
	    case "6":result+="|_. ";break;
	    case "7":result+="..| ";break;
	    case "8":result+="|_| ";break;
	    case "9":result+="|_| ";break;
	}
    }
    result=result.substring(0,result.length-1);
    result+="\n";
    for(var j=0;j<x.length;j++){
	switch(x.charAt(j)){
	    case "0":result+="|_| ";break;
	    case "1":result+="..| ";break;
	    case "2":result+="|_. ";break;
	    case "3":result+="._| ";break;
	    case "4":result+="..| ";break;
	    case "5":result+="._| ";break;
	    case "6":result+="|_| ";break;
	    case "7":result+="..| ";break;
	    case "8":result+="|_| ";break;
	    case "9":result+="..| ";break;
	}
    }
    result=result.substring(0,result.length-1);
    result+="\n";
    return result;
    //console.log("Debug Info");
    //return 'Hello World!';
};
