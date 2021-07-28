import { Button } from 'vant';

export default function(Vue){
    [ Button ].forEach( function ( component ) {
        Vue.use( component );
    })
    
}
