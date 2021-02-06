type AppSyncEvent = {
  info: {
    fieldName: string
  }

  arguments: {
    title: string
  }
};

exports.handler = async (event: AppSyncEvent) => {
  const notesArray = ["note01", "note02", "note03"];

  
}