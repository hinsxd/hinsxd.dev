export const CodeSandBox = ({ sandboxId, title }) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${sandboxId}?fontsize=14&theme=dark`}
      style={{
        width: '100%',
        height: 400,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      title={title}
      // allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      // sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}
