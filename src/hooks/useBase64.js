const useBase64 = ()=>{



    
    function encode(str) {
        const uint8Array = new TextEncoder().encode(str);
        const base64String = btoa(String.fromCharCode(...uint8Array));
        return base64String;
      }
    
      function decode(base64) {
        const binaryString = atob(base64);
        const bytes = Uint8Array.from(binaryString, char => char.charCodeAt(0));
        const decodedString = new TextDecoder().decode(bytes);
        return decodedString;
      }


      return {
        encode,
        decode
      }
}

export default useBase64;