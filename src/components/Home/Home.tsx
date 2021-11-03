import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import car_image from '../../assets/images/car_image.jpeg';
import { classicNameResolver } from "typescript";


interface Props{
    title: string;
}


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between'
        
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex',
        listStyle: 'none'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main:{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${car_image})`,
        width:'100%',
        height:'100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'

    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '48%',
        color: 'white'
        


    }
  
    
});

export const Home = ( props:Props) => {

    const classes =useStyles();

    return (
       <div className={classes.root}>
           <nav>
               <div className={classes.navbar_container}>
                   <h1 className={classes.logo}>
                       <a href="" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Brand</a>
                   </h1>
                   <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                       <li>
                       <a href="" className="{classes.nav_a}">Home</a></li>
                       <li>
                       <a href="" className="{classes.nav_a}">About</a></li>
                       <li>
                       <a href="" className="{classes.nav_a}">Learn More</a></li>
                   </ul>
               </div>
           </nav>
           <main className="{classes.main}">
               <div className=''>
                   <h1>{props.title}</h1>
                   <p>I like Cars</p>
                   <Button color ='primary' variant="contained">Click Here!</Button>
               </div>
           </main>
       </div>
    )
}
