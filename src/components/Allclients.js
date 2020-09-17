import React, { useContext, useEffect, useState, lazy } from 'react'
import { ContextStore } from './Store'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Axios from 'axios'
import Heder from './Heder';

export default function Allclients() {
    
    // val.orders
    // const val = useContext(ContextStore)
    const[flag,setflag]=useState(false)
   const [orders, setorders] = useState('')
        const [eachcient, seteachcient] = useState([])
    const getAll=() => {
        let ignore=false
        const getList=()=>{
            
            let token=localStorage.getItem('token'); 
            var config = {
                headers: {   'x-auth-token':token }}
                //  console.log('requested');
                Axios.get('https://concrete-react.herokuapp.com/users/get/'+null,config) 
                //    Axios.get('http://localhost:3000/users/get/'+lastorder,config) 
                
                .then((response) => { 
                     setorders(response.data)
                  
                }).catch((err)=>{
                    // JSON.stringify(err)
                    console.log(err);
                    console.log('an error');
                    
                })
            }
            getList(); }
useEffect(() => {
 getAll()

}, [])



// var makeQuery = function(property, regexp) {
//         // return a callback function for filter, see MDC docs for Array.filter
//         return function(elem, index, array) {
//             return elem[property].search(regexp) !== -1;
//         };
//     };

// var q = makeQuery('lastname', /^a/i); // ^ = from beginning, i = "ignore case"
// console.log(q);

// patientRecord.filter(q);
// const words =  patientRecord

const splitstr=(str)=>{
    
    let string= str.split(" ").join("")
    return string
}

const sortbynameOforder=()=>{
    if(orders) {
        let arrOfNames=[]

        
        for (let i = 0; i < orders.length; i++) {
            if(arrOfNames.indexOf(splitstr(orders[i].orderName))==-1){
           
            arrOfNames.push(splitstr(orders[i].orderName))  
            // break;
        }
        
    }
    
// });
// console.log(arrOfNames);
//
//order 
let ordersForDisplay=[]
arrOfNames.forEach(item => {
    let eachitem= orders.filter(word =>splitstr(word.orderName) ==splitstr(item))

ordersForDisplay=[...ordersForDisplay,eachitem]


});

return ordersForDisplay

} }



////
const sortTypeOrder=()=>{
    const sortnameclient=sortbynameOforder()

    let arrOfTypeOrder=[]
    
    try {
        
        
    if(sortnameclient){
        for (let i = 0; i < sortnameclient.length; i++) {
            for (let n = 0; n < sortnameclient[i].length; n++){
      
            if(arrOfTypeOrder.indexOf(splitstr(sortnameclient[i][n].orderType))==-1){
                arrOfTypeOrder.push(splitstr(sortnameclient[i][n].orderType))  
            
            }}
            }
        }
       
    } catch (err) {
        console.log(err); 
     }
    
                
           
                const  ordersForDisplay=[]
                if(arrOfTypeOrder){
      
            console.log( arrOfTypeOrder);
            const forAlldate=[]
            var sum=0
        for (var i = 0; i < arrOfTypeOrder.length; i++) {
            sum=0
                if( i<sortnameclient.length){
                    var limit=i
                 
                    forAlldate.push({orderName:sortnameclient[limit][0].orderName,arrofobj:[]})
                }
                for (let n = 0; n < arrOfTypeOrder.length; n++) {
                    var counter=0
              
                    var eachitem= sortnameclient[limit].filter(word =>splitstr(word.orderType) ==splitstr(arrOfTypeOrder[n]))
               
                    for (let iEtchType = 0; iEtchType < eachitem.length; iEtchType++) {
                        if(eachitem[iEtchType].finishOrder=='b3'){
                        counter=counter+(+eachitem[iEtchType].cupAmount);}
               
                    }
                   
                    console.log('etch item');
                 
                    if(eachitem.length!=0){
                
                        console.log('the counter is: '+counter); 
                        
                        
    
                        let lengthObj=sortnameclient[limit].length
                    
                                try {
                                   
                        let ignore=false
                        for (let index1 = 0; index1 < forAlldate.length; index1++) {
                        
                            
                            for (let index2 = 0; index2 < eachitem.length; index2++) {
                                
                                let ind=  forAlldate[index1].arrofobj.findIndex(({_id}) =>  _id ==eachitem[index2]._id)
                              
                                console.log(ind); 
                                if(ind==-1){ignore=true} 
                                else{ignore=false}
                            }
                            
                        }
                        
                            if (ignore) {
                                let counter1=counter
                                forAlldate[limit].arrofobj=[...forAlldate[limit].arrofobj,...eachitem,{sumcup:counter1}]
                                
                        
                                
                            }
                   
                        } catch (error) {
                            console.log(error);
                        }
                        
                    
                       
                    }
                
                }
               
            }
          
                                        seteachcient(forAlldate) 
                                    }
                                   
                                } 
                                
                                        
                                        // (3) [{…}, {…}, {…}]
                                        // 0: {_id: "5f60dc9f0c00a90017f87936", orderName: "סלאם עויסאצ", orderDirection: "באקה", orderType: "בוון", cupAmount: "8", …}
                                        // 1: {_id: "5f60dc120c00a90017f87935", orderName: "אנס אבו מוך ", orderDirection: "באקה", orderType: "בטקל", cupAmount: "4", …}
                                        // 2: {_id: "5f60db6f0c00a90017f87933", orderName: "אנס אבו מוך", orderDirection: "באקה", orderType: "צמנטיט", cupAmount: "5", …}
                                        // length: 3
                                        
                                        
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
                                        // ordersForDisplay
   function mapoverall(){
    if(eachcient){
    const alldata=  eachcient.map((arrname,i)=>{
                
         return (   <div style={{}}>
                     
                     <table style={{direction:'rtl'}}  className='table table-bordered'>
                                          <thead >
                                            <tr>
                                              <th scope='col'>שם ההזמנה: {arrname.orderName} </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              {/* <th scope='row'>1</th> */}
                                            <td>תאריך יצירה</td>

                                            <td>תאריך הכנה</td>
                                              <td>כתובת</td>
                                              <td>חומר</td>
                                              <td>כמות קוב</td>
                            
                                            </tr>
                  
       {arrname.arrofobj.map((item,i)=>{
             let color
             if(item.finishOrder!='b3'){color='red'}
             else{color='#28a745'}
             const returntd=()=>{
             if (item.sumcup) {
                     return <td style={{backgroundColor:'#ffc107',fontSize:'25px'}} > סה"כ: {item.sumcup}</td>
                    }else{return    <td style={{backgroundColor:color}} >{item.cupAmount}</td> 
                      }
                 }
               
             return  (<tr style={{}}>
                 
        {  <td style={{backgroundColor:color}} >{!item.sumcup ? convertDatecreate(item.createdAt):'' }</td>}
                 <td style={{backgroundColor:color}} >{!item.sumcup ? convertDate(item.updatedAt,item.finishOrder):'' }</td>

                 <td style={{backgroundColor:color}} >{item.orderDirection}</td>
                  <td style={{backgroundColor:color}} >{item.orderType}</td>
                 
                 {/* <td style={{backgroundColor:color}} >{item.orderDirection}</td> */}
                 {returntd()}
                 {/* <td style={{backgroundColor:color}} >{item.cupAmount}</td> */}
                 
               
             </tr> 
                ) })}
                                          </tbody>
                                        </table>
   
      
   
      </div>

        )

    })
return alldata }}


const expo=()=>{
    try {
       
    //     csvData.map((item,i)=>{
    //         let sumi=i+1
    //          data.push({'שם ההזמנה':item.orderName,'סוג ההזמנה':item.orderType,'כתובת':item.orderDirection,'קוב':item.cupAmount, 'יצירת ההזמנה':convertDatecreate(item.createdAt),'סיום ההזמנה':convertDate(item.dateFinished,item.finishOrder),ID:item._id,'מספר ההזמנה':sumi})})
    //    //  console.log(data);
        
       } catch (error) {
           // console.log(error);
       }
       const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
       const fileExtension = '.xlsx';
       exportToCSV(eachcient,'AllData')
       function exportToCSV  (csvData, fileName)  {
           const ws = XLSX.utils.json_to_sheet(csvData);
   const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
   const data = new Blob([excelBuffer], {type: fileType});
   FileSaver.saveAs(data, fileName + fileExtension);
}}





return (
        <div>
            <Heder/>
            {/* <button onClick={() =>{ setflag(!flag)}}>Refresh</button> */}
              <button className='btn btn-primary m-3' onClick={() => {sortTypeOrder()}}>הצג הכל</button>
              {/* <button className='btn btn-primary' onClick={() => { expo()}}>Excel</button> */}
              {
              mapoverall()}
        </div>
    )
}
