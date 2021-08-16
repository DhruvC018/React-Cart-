import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase';
import 'firebase/firestore'; 

class App extends React.Component { //here, App is a function based component.
  
  constructor() {  
    super(); 
      this.state = { 
        products: [ //array created and here we will map over hte items of the array and put it in our list.

          ///// commenting this out because now we will be fetching our data from the firebase /////
          // {
          //   price: 99,
          //   title: 'Watch',
          //   qty: 10,
          //   img: 'https://www.longines.com/media/catalog/product/cache/8db0cbef53b094d1dd99f8463500f53a/t/h/the-longines-master-collection-l2-673-4-78-3-detailed-view-2000x2000-1.jpg',
          //   id: 1
          // },
          // {
          //   price: 999,
          //   title: 'Mobile Phone',
          //   qty: 1,
          //   img: 'https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg',
          //   id: 2
          // },
          // {
          //   price: 999,
          //   title: 'Laptop',
          //   qty: 4,
          //   img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000',
          //   id: 3
          // }
        ],
        loading: true
      }
      this.db = firebase.firestore();
  }

  // life cycle method
  componentDidMount () {
    // firebase 
    //   .firestore()
    //   .collection('products')
    //   .get() //returns a promise and a query snapshot
    //   .then((snapshot) => { //snapshot is passed as an argument can be ranamed to anything. it will give us a snapshot of the database at that time.
    //     console.log(snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     });
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id //this is because the document has the id and not the ibject dispalyed when we console.log
    //       return data; //we return doc.data and not doc because we need the data inside the doc and not the doc itself.
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    // in order to update it automatically and we don't have to refresh it

    this.db
      .collection('products')
      // .get() //returns a promise and a query snapshot
      .where('price', '==', 999) //return all products wiht price 99. SIilarly we can look for elements with various values 
      // .orderBy('price') //gives uis the price in ascending order
      .orderBy('price', 'desc') //gives us the price in decending order
      .onSnapshot((snapshot) => { //snapshot is passed as an argument can be ranamed to anything. it will give us a snapshot of the database at that time.
        //onSnapshot is an inbuilt keyword which is provided to us by react.
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data())
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id //this is because the document has the id and not the ibject dispalyed when we console.log
          return data; //we return doc.data and not doc because we need the data inside the doc and not the doc itself.
        })

        this.setState({
          products,
          loading: false
        })
      })
  }
    
    handleIncreaseQty = (product) => {
        const{ products } = this.state;
        const index = products.indexOf(product);

        // products[index].qty += 1; //instead of doing this, we will make the changes in the firebase.

        // this.setState({
        //     products: products
        // });

        ///// Now we will make changes directy in firebase.

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef
          .update({
            qty: products[index].qty+1
          })
          .then(() => {
            console.log('Document Updated successfully')
          })
          .catch((error) => {
            console.log('Error is: ', error);
          })
    }

    handleDecreaseQty = (product) => {
        const{ products } =this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }

        // products[index].qty -= 1;

        // this.setState({
        //     products: products
        // })

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef
          .update({
            qty: products[index].qty-1
          })
          .then(() => {
            console.log('Document Updated successfully')
          })
          .catch((error) => {
            console.log('Error is; ', error);
          })
    }

    handleDeleteProduct = (id) => {
        const{products} = this.state;

        // const items = products.filter((item) => item.id!=id);
    
        // this.setState({
        //     products: items 
        // })

        const docRef = this.db.collection('products').doc(id); //we simplly pass id and not products[index].id because the id has already been passed as a parameter.
        
        docRef
          .delete()
          .then(() => {
            console.log('Deleted successfully')
          })
      }

    getCartCount = () => {
       const { products } = this.state;

       let count = 0;
       
       products.forEach((product) => {
         count+=product.qty;
       })
      return count;
    }

    getCartTotal = () => {
      const{products} = this.state;

      let cartTotal = 0;
      products.map((product) => {
        if(product.qty > 0) {
          cartTotal = cartTotal + product.qty * product.price;
        }
        return '';
      });
      return cartTotal;
    }

    addProduct = () => {
      this.db
        .collection('products')
        .add({
          img: '',
          price: 900,
          qty: 3,
          title: 'washing machine'
        })
        .then((docRef) => {  //docRef is the reference of the object in the firebase
          console.log('Product has been added', docRef) //the above will be converted into a document and then will be added to our collection products.
        })
        .catch((error) => {    //catch used for catching errors.
          console.log('Erro: ', error);
        })  
    }

    render() {
      const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        {/* <button onClick = {this.addProduct} style = {{padding: 20, fontSize: 20}}>Add a product</button> */}
        <Cart
          products = {products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h3>Loading Products...</h3>}
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
