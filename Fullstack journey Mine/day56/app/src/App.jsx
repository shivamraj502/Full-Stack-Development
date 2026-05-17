/**
Day 56 – UI Libraries

Topic: ShadCN / Material UI
Task:
Use prebuilt components
 */


// function App(){
//   return(
//     <>
//     <h1>hello library</h1></>
//   )
// }export default App;



import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "100px"
    }}>

      <Card sx={{ maxWidth: 400, padding: 3 }}>
        
        <CardContent>

          <Typography variant="h4" gutterBottom>
            Material UI
          </Typography>

          <Typography variant="body1">
            This is a prebuilt UI component library.
          </Typography>

          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Click Me
          </Button>

        </CardContent>

      </Card>

    </div>
  );
}

export default App;