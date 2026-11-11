import RenderList from './src/renderList';
const appstyle={
background:"#101c3a",
height:"100vh",
width:"100vw",
display:"flex",
justifyContent:'center',
alignItems:''
}
export default function App() {
  return (
    <div style={appstyle}>
<RenderList/>
    </div>
  )
}
