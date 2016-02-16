angular.module('myApp.spots', []).controller('SpotsController', function($scope) {
  
  $scope.tagline = 'To the moon and back!';   

  $scope.spots = [
    {spotName: 'Amoura Cafe Fresh Mediterranean',
     type: 'Foodcourt',
     imageUrl: 'https://res-1.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/jdda6zw6vrvahabb9xcr.png'
    },
    {spotName: 'Andale Mexican Restaurant',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/uujiebejlx54tdmxcnbz.png'
    },
    {spotName: 'Auntie Anne\'s Pretzels',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/v1/retailer/a/au-av/auntie-annes-pretzels/us/logos/4081logogray.png'
    },
    {spotName: 'Beard Papa\'s Cream Puffs',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/soxgtl6hwmh1zlhuwxhe.png'
    },
    {spotName: 'Bistro Burger',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/vhtwb7s1rwa7ayy7dcfp.png'
    },        
    {spotName: 'Bristol Farms',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/bzjh7pqs3phwuqsb2k9t.png'
    },
    {spotName: 'Buckhorn Grill',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/ubmsvtjpemucabqjo5zo.png'
    },
    {spotName: 'Cafe Bellini',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/khvb1fo5zwl2vdpzt6b3.png'
    },
    {spotName: 'Caffe Central',
     type: 'Foodcourt',
     imageUrl: 'https://res-1.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/ppvioyihvc6vhueuepjq.png'
    },
    {spotName: 'Cako Bakery',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/xamqjykq6bjgyhuxas5e.png'
    },
    {spotName: 'Charley\'s Grilled Subs',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/iqm0ksralkfhadwjlqqs.png'
    },
    {spotName: 'Chipotle',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/ouw7suexvi2shcp8yvzt.png'
    },
    {spotName: 'Cocoabella Chocolates',
     type: 'Foodcourt',
     imageUrl: 'https://res-1.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/aago2orln9kag9wzjrfr.png'
    },
    {spotName: 'Coriander Gourmet Thai',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/fmi3q697hzlmsrvolwwm.png'
    },
    {spotName: 'Cupola Pizzeria',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/mai7snoffku8nsz1dfmi.png'
    },
    {spotName: 'DAVIDsTEA',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/amtynswquhzm3onoxcuh.png'
    },
    {spotName: 'Fire of Brazil',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/eulcf0y6wrfr85stnybf.png'
    },
    {spotName: 'Ghirardelli Ice Cream and Chocolate Shop',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/nm6ns128lkf9wjl4f9yj.png'
    },
    {spotName: 'Godiva Chocolatier',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/j1utitna7chuun5kzq1j.png'
    },
    {spotName: 'Haagen Dazs',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/mhyj1f6txa7uyyr0hcx0.png'
    },
    {spotName: 'Jamba Juice',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/czsrye1fd4hbdpg2q1sq.png'
    },
    {spotName: 'Kichi Grill',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/l3gl2rcfvi3zx8z29foi.png'
    },
    {spotName: 'Loving Hut Vegan Cuisine',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/o1wzpjuhsu6sifwp2u6i.png'
    },
    {spotName: 'Lupicia Fresh Tea',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/hproq1byqfdr7umusifl.png'
    },
    {spotName: 'Mrs. Fields',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/guca23jy0o9hgdaq3xq2.png'
    },
    {spotName: 'M.Y. China',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/wsdgyzlglhrx8feoorbu.png'
    },
    {spotName: 'Napoleon\'s Macarons',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/giyrladtutolotsd63f3.png'
    },
    {spotName: 'Nordstrom Cafe Bistro',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/dje7cghb9skpjt84rsgv.png'
    },
    {spotName: 'Nordstrom E-Bar',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/augvcvivzlpnlubpdsax.png'
    },
    {spotName: 'Pacific Puffs',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/zbjjrg49pbszmhvkjhrx.png'
    },
    {spotName: 'Panda Express',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/i4wjcsgyzuz6nl0ykpnf.png'
    },
    {spotName: 'Pasta Moto',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/izszbp6lqnzy3ms33azx.png'
    },
    {spotName: 'Peet\'s Coffee & Tea',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/enxdy6gq9d9yhr7sxp7l.png'
    },
    {spotName: 'Pressed Juicery',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/ublefz9gr6xurte4ayt6.png'
    },
    {spotName: 'San Francisco Soup Company',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/jojcuz4a2imchvl89zb1.png'
    },
    {spotName: 'Sarku Japan',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/yocrchwij4jc0ovsmmlv.png'
    },
    {spotName: 'Sorabol Korean BBQ & Asian Noodles',
     type: 'Foodcourt',
     imageUrl: 'https://res-3.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/ccjive02ebc2x0f8unyt.png'
    },
    {spotName: 'Starbucks',
     type: 'Foodcourt',
     imageUrl: 'https://res-2.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/kzv0pn2m1fzdpibg4enx.png'
    },
    {spotName: 'TAP (415)',
     type: 'Foodcourt',
     imageUrl: 'https://res-1.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/pozpdkqd6gdyxqplbnxb.png'
    },
    {spotName: 'Teavana',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/t2qzvjaxcvw4iqzyz9lc.png'
    },
    {spotName: 'Wetzel\'s Pretzels',
     type: 'Foodcourt',
     imageUrl: 'https://res-4.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/vtq4iwvqkuckenrqknib.png'
    },
    {spotName: 'Yoppi Frozen Yogurt',
     type: 'Foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/obeujxazzgatl4ywuhkd.png'
    },

    {spotName: '',
     type: 'Not foodcourt',
     imageUrl: 'https://res-5.cloudinary.com/wlabs/image/fetch/b_white,c_pad,f_auto,g_center,h_300,q_90,w_300/http://res.cloudinary.com/wlabs/image/upload/obeujxazzgatl4ywuhkd.png'
    },



  ]



});