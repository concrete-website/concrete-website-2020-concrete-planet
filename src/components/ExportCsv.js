import React, { useState, useEffect } from 'react'

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Axios from 'axios';

var data=[]
export const ExportCSV = ({csvData, fileName}) => {
    const[flag,setflag]=useState(false)
    const[flag2,setflag2]=useState(false)

const deletealldata=()=>{

 
    let token=localStorage.getItem('token'); 
    var config = {
    headers: { 
      'x-auth-token':token }}
      

 Axios.delete('https://concrete-react.herokuapp.com/users/del',config).then((res)=>{
//    console.log(res);
   alert('!تم حذف كل شيء')
 }).catch((err)=>{
//   console.log(err); 
 })}
                
    
    useEffect(() => {
        if(flag){
setTimeout(() => {
    setflag(false)
}, 10*600000);}
    }, )
    const DisplayAndHide=()=>{
    if(flag){
    
        return(  <button  className='btn btn-danger' onClick={() => {deletealldata()} }>Delete/ !حذف كل شيء</button>)
            
            
    }
    }


    const convertDatecreate=(date)=>{
    var d2 = new Date(date); 
    let month=(+d2.getMonth())
    let month2=month+1
     let dateandtime=d2.getDate()+'/'+month2+'/'+ d2.getFullYear()+' '+ d2.getHours()+':'+d2.getMinutes()+':'+d2.getSeconds()
//    if(!(statusbtn=='b3')){dateandtime='לא מוכן/غير جاهز'}
    return dateandtime
    }
    const convertDate=(date,statusbtn)=>{
    var d2 = new Date(date); 
    // var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    // +' '+ d2.getHours+' '+d2.getTime+' '+d2.getSeconds
    let month=(+d2.getMonth())
    let month2=month+1
   let dateandtime=d2.getDate()+'/'+month2+'/'+ d2.getFullYear()+' '+ d2.getHours()+':'+d2.getMinutes()+':'+d2.getSeconds()
   if(!(statusbtn=='b3')){dateandtime='לא מוכן/غير جاهز'}
    return dateandtime
    } 
     const expo=()=>{
         try {
            
             csvData.map((item,i)=>{
                 let sumi=i+1
                  data.push({'שם ההזמנה':item.orderName,'סוג ההזמנה':item.orderType,'כתובת':item.orderDirection,'קוב':item.cupAmount, 'יצירת ההזמנה':convertDatecreate(item.createdAt),'סיום ההזמנה':convertDate(item.dateFinished,item.finishOrder),ID:item._id,'מספר ההזמנה':sumi})})
            //  console.log(data);
             
            } catch (error) {
                // console.log(error);
            }
            const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const fileExtension = '.xlsx';
            exportToCSV(data,fileName)
            function exportToCSV  (csvData, fileName)  {
                const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }}


    
return (
          <div style={{}}>
             
        <button  className='btn btn-success' onClick={(e) => expo() }>Export</button>

<button  className='btn btn-danger' onClick={() =>{
    expo()
    setTimeout(() => {
        setflag(!flag)  
    }, 10000);
    }}>تنزيل ثم حذف</button>
     {DisplayAndHide()}

       
    </div>)
}