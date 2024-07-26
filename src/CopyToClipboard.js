export const CopyToClipboard = (text) => { 
    if (document.hasFocus()) {
      return navigator.clipboard.writeText(text).then(() => true)
    } else {
      console.warn("Document is not focused, unable to copy to Clipboard")
    }
  }