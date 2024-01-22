import { FormEvent, useState } from 'react'
import axios from 'axios'

function App() {
  const [files, setFiles] = useState<FileList | null>(null)

  function handleUploadFile(e: FormEvent) {
    e.preventDefault()
    
    if (!files || files.length === 0) {
      return
    }
    
    const file = files[0]
    
    axios.put('https://rabbithole-dev.e18f7fa2d5a261c681068b7aa5e66e92.r2.cloudflarestorage.com/fa3a6dfa-85cc-41ea-be5c-4f1fcd5bb0d0-teste.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=3b53c85c191a8cabf2645c545081396d%2F20240121%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240121T225609Z&X-Amz-Expires=600&X-Amz-Signature=eeea4a33c55fb5e502d1d21deb348ab084eff209ba7bc70e34097635dcbc3e81&X-Amz-SignedHeaders=host&x-id=PutObject', file, {
      headers: {
        'Content-Type': 'video/mp4',
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleUploadFile} style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
        <input type="file" name="file" onChange={(e) => setFiles(e.target.files)}/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default App
