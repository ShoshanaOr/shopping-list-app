import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import axios from 'axios';

interface Item {
  product: string;
  category: string;
  quantity: number;
}

interface ShoppingList {
  _id: string;
  userId: string;
  items: Item[];
  createdAt: string;
}

export default function MyLists() {

  const user = useSelector((state: RootState) => state.user)
  const [lists, setLists] = useState<ShoppingList[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const url = `http://localhost:3000/shopping-lists/user/${user._id}`
        const res = await axios.get<ShoppingList[]>(url);
        setLists(res.data);
        console.log(res.data);
        
      } catch (err) {
        console.error('Failed to fetch shopping lists:', err);
      }
    };

    if (user._id) {
      fetchLists();
    }
  }, [user._id]);

  return (
    <Container maxWidth="md" sx={{ p: 2 , justifyContent: 'center',mt:10}}>
      <Typography variant="h4">שלום {user.fullName}</Typography>
      <Typography variant="h3" gutterBottom>
        רשימות הקניות שלי
      </Typography>
      {lists.length === 0 ? (
        <Typography>אין רשימות להצגה</Typography>
      ) : (
      lists.map((list) => (
      <Card key={list._id} sx={{ mb: 2 }}>
            <CardContent>
            <Typography variant="h6">
                רשימה מתאריך: {new Date(list.createdAt).toLocaleString()}
          </Typography>
              <ul>
              {list.items.map((item, index) => (
              <li key={index}>
              {item.product} – {item.category} – כמות: {item.quantity}
              </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  )
}
