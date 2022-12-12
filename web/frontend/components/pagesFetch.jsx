import { Select } from "@shopify/polaris";
import { useAppQuery} from "../hooks";

export function PagesFetch() {
  const {
    data,
    isError,
    isSuccess,
    isLoading,
    error
  } = useAppQuery({
    url: "/api/pages",
    reactQueryOptions: {
      staleTime: 60000
    },
  });

  if(isLoading){
    console.log('Loading...');
    return <Select label="Select Page" options={["Loading..."]}  />
  }

  if(isError){
    console.log('Error...');
    return <div>Error...</div>
  }

let options = data.map(page => {
  return  {label: page.title, value : page.handle }
})

options.unshift({label : 'Select'});


   return (
    <>
      <Select
          label="Select Page"
          options={options}
      />
    </>
  );
}
