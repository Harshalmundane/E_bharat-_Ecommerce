/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { fireDb } from '../../firebase/firebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';


function MyState(props) {
  const [mode, setMode] = useState('light');  
  const [loading, setLoading] = useState(false); 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDb, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products);
      toast.success("Product Add successfully");
    
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 800);
      getProductData();
      closeModal();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    
    setProducts("")
  }

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDb, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
  }, []);


  const edithandle=(item)=>{
   setProduct(item)
  }
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDb, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
      window.location.href = '/dashboard'
    } catch (error) {
      
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  
  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDb, "products", item.id));
      toast.success('Product Deleted successfully');
      setLoading(false);
      getProductData();
    } catch (error) {
      toast.error('Product Deletion Failed'); // Corrected from toast.failed to toast.error
      setLoading(false);
    }
  };
  
  

  return (
    <MyContext.Provider value={{ product,
      mode, toggleMode, loading,setLoading,
      products, setProducts,addProduct ,edithandle,updateProduct,deleteProduct}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState