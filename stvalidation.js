function stvalidation()
{
    var Index=document.forms["myform"]["stindex"].value;
    var name=document.forms["myform"]["stname"].value;
    var couers=document.forms["myform"]["course"].value;
    var appdate=document.forms["myform"]["applieddate"].value;
    var status=document.forms["myform"]["status"].value;

    if(Index=="" )
    {
        alert("Index must be filled out");
        document.myform.Index.focus();
        return false;
    
    }
    else if(name==""||name==null|| name !=Int16Array)
    {
        alert("name must be filled out");
        document.myform.name.focus();
        return false;
    
    }
    else if(couers==""||couers==null )
    {
        alert("couers must be filled out");
        document.myform.couers.focus();
        return false;
    
    }
    else if(appdate==""||appdate==null )
    {
        alert("Date must be filled out");
        document.myform.appdate.focus();
        return false;
    
    }
    else if(status==""||status==null )
    {
        alert("Status must be filled out");
        document.myform.status.focus();
        return false;
    
    }
    return true;
}