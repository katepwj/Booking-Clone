export const createError = (status, msg) => {
const err=new Error()
err.status=status
err.msg=msg
return err
}