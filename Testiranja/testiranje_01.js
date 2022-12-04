import http from 'k6/http';
import {sleep}from 'k6';
export let option={
insecureSkipTLSVerify:true,
noConnectionReuse:false,
vus:1,
duration:'10s'

};
export default ( ) =>{
 http.get('http://test.k6.io');
 sleep(2);
}