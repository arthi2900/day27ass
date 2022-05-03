import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {

  const name = " ✓ ";
    const name2=" ✕ ";
  

  const data=[{
    price:"Free",
    mon:"$0/month",
    fristvalue:` ${name} Single User`,
    secondvalue:` ${name} 5GB Storage`,
    thirdvalue:` ${name} Unlimited Public Projects`,
    fourthvalue:` ${name}Community Access`,
    fivethvalue:`${name2}Unlimited Private Projects`,
    sixthvalue:`${name2}Dedicated Phone Support`,
    seventhvalue:`${name2}Free Subdomain`,
    eigththvalue:`${name2}Monthly Status Reports`,
  },
  {
    price:"PLUS",
    mon:"$9/month",
    fristvalue:` ${name} 5 User`,
    secondvalue:` ${name} 50GB Storage`,
    thirdvalue:` ${name} Unlimited Public Projects`,
    fourthvalue:` ${name} Community Access`,
    fivethvalue:` ${name} Unlimited Private Projects`,
    sixthvalue:` ${name} Dedicated Phone Support`,
    seventhvalue:` ${name} Free Subdomain`,
    eigththvalue:` ${name2}Monthly Status Reports`,
  },
  {
    price:"PRO",
    mon:"$49/month",
    fristvalue:` ${name} Unlimited Users`,
    secondvalue:` ${name}150GB Storage`,
    thirdvalue:` ${name} Unlimited Public Projects`,
    fourthvalue:` ${name} Community Access`,
    fivethvalue:` ${name} Unlimited Private Projects`,
    sixthvalue:` ${name} Dedicated Phone Support`,
    seventhvalue:` ${name} Unlimited Free Subdomains`,
    eigththvalue:` ${name} Monthly Status Reports`,
  }
  ]
  
  return (
    <div className="App">
    <div className="header">
    {data.map(nm=> <Table price={nm.price} mon={nm.mon} fristvalue={nm.fristvalue}
     secondvalue={nm.secondvalue} thirdvalue={nm.thirdvalue}  fourthvalue={nm. fourthvalue}
     fivethvalue={nm.fivethvalue} sixthvalue={nm.sixthvalue} seventhvalue={nm.seventhvalue}
     eigththvalue={nm.eigththvalue}
     />)}
    
         </div>
    </div>
  );
}

function Table({price,mon,fristvalue,secondvalue,thirdvalue,fourthvalue
,fivethvalue,sixthvalue,seventhvalue,eigththvalue})
{
  return(
    <div className="table">
<p className='grey'>{price}</p>
<h3>{mon}</h3>
<hr/>
<div class="maintitle">
<p>{fristvalue}</p>
<p>{secondvalue}</p>
<p>{thirdvalue}</p>
<p>{fourthvalue}</p>
<p>{fivethvalue}</p>
<p>{sixthvalue}</p>
<p>{seventhvalue}</p>
<p>{eigththvalue}</p>
<Button variant="contained" className='button'>Button </Button>

     
<p></p>
</div>


</div>
  )
  }
export default App;
