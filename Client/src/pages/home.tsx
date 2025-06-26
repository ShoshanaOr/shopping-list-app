import React from 'react'
import { Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <Container disableGutters component="main" sx={{ pt: 6, pb: 6 ,mt: 7, justifyContent: 'center',alignItems: 'center',textAlign: 'center',}}>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        ניהול קניות יומיומי פשוט קל ונוח 
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        paragraph
        sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}
      >
        מהיום עם אפליקציית Shopping List תוכלו לנהל את רשימת הקניות שלכם בצורה מהירה, נוחה ונגישה מכל מקום. 
        הוסיפו פריטים, ארגנו לפי קטגוריות, ושתפו את הרשימה עם בני המשפחה – בלחיצת כפתור.
        הצטרפו עכשיו ותתחילו לחסוך זמן ומאמץ.
      </Typography>

      <Stack sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/auth"
        >
          הרשמה
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/auth"
        >
          התחברות
        </Button>
      </Stack>
    </Container>
  )
}
