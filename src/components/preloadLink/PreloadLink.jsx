import React from 'react'
import TopBarProgress from "../TopBarProgress/TopBarProgress"
import "./Preload.scss"
import {matchRoutes, useNavigate} from "react-router-dom";
import {routes} from "../../Routes";

const findComponentForRoute = (to) => {
  let route = null
  const match = matchRoutes( routes, to,  "/");
  if(match && match.length > 0){
    route = match[0].route
  }
  
  return route
};


let preloadLinks = []

const PreloadLink = (props)=>{
  const {staticContext, to, delay, isActive, children, ...rest} = props
  const navigate = useNavigate()
  
  let id;
  let componentLoadTimeOutId;
  const [ loaded, isLoaded ] = React.useState(false)
  const [ isLoading, setLoading ] = React.useState(false)
  
  
  /** log warning message if not pass component preload promises */
  function preloadLog(message){
    console.info(`*********** ${message} *************`)
  }
  
  
  /** render normal route without preload component chunks */
  function normalRouteLoad(){
    preloadLog("component.preload function not return any promise, " +
      "we assume you are not using react lazy loading routing, " +
      "so you can simple use NavLink or Link"
    )
    preloadLinks = []
    isLoaded(true)
    
    // * just nice delay loading bar
    id = setTimeout(()=>{
      setLoading(false)
    }, delay ? delay : 100 )
    
    // * delay route change loading bar
    if(delay){
      componentLoadTimeOutId = setTimeout(()=>{
        navigate(to)
      }, delay)
    } else{
      navigate(to)
    }
  }
 
  
  function preloadRouteComponent( path){
    
    /**
     * Clear loading bar Timeout if
     * double click before load component
     * if supply delay timeout props
     *
     * */
    clearTimeout(id)
    
      /**
     * Clear component load Timeout if
       * double click before load component
       * if supply delay timeout props
       *
     * */
    clearTimeout(componentLoadTimeOutId)


    setLoading(true)
    isLoaded(false)
    preloadLinks.push(path)
 
    
    const route = findComponentForRoute(to);
    
    if (route && route.component && route.component.preload) {

      const moduleLoadedPromise = route.component.preload()
      
      /**
        * check it preload function exist or not when import module with loadable component or react lazy
        *  const ReactLazyPreload  = (importStatement)=>{
        *    const Component:ComponentType = lazy(importStatement)
        *     Component.preload = importStatement   // preload function return as promises
        *     return Component
        * }
        *  Here lazy should be = loadable component or React lazy
       */

      if(moduleLoadedPromise){
        moduleLoadedPromise.then(()=>{
          if(delay){
            setTimeout(()=>{
              // isLoaded(true)
              setLoading(false)
              preloadLinks = []
              navigate(path)
            }, delay)
          } else{
            // isLoaded(true)
            setLoading(false)
            navigate(path)
            preloadLinks = []
          }

        }).catch(err=>console.log("Something were wrong when preload component load", err))


      } else{
        /**
         * Component.preload function not return promises So return normal Route without preload component
         */
        normalRouteLoad()
      }

    } else {
      normalRouteLoad()
    }
  }
  
  
  return (
    <div className="preload_route_link" >
       { isLoading && <TopBarProgress/> }
      <div className="pointer-events-nones" >
      <a href={to} onClick={(e)=>e.preventDefault()} onMouseDown={()=> preloadRouteComponent(to) }>
        <span  {...rest} >
          {children}
        </span>
      </a>
      </div>
      
    </div>
  )
}



export default  PreloadLink