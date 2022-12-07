import { useState, useCallback, useEffect } from "react";
import {
    Select
} from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export function PagesCard() {
  const emptyToastProps = { content: null };
  const [optionsValues, setOptionsValues] = useState(['Select']);
  const [isLoading, setIsLoading] = useState(true);
  const [toastProps, setToastProps] = useState(emptyToastProps);
  const fetch = useAuthenticatedFetch();
  const [selected, setSelected] = useState();
  const handleSelectChange = useCallback((value) => setSelected(value), []);

 const {
    data,
    refetch: refetchProductCount,
    isLoading: isLoadingCount,
    isRefetching: isRefetchingCount,
  } = useAppQuery({
    url: `/api/pages`,
    reactQueryOptions: {
      onSuccess: () => {
        setIsLoading(false);
      },
    },
  });

//   console.log(data, refetchProductCount,'ddd',isLoadingCount, 'gg',isRefetchingCount,'pagesfetch')

useEffect(async () => {
    await refetchProductCount()
    let optionsValues = data.map(page => {
        return {label : page.title, value : page.handle};
       });
    setOptionsValues(optionsValues);
  }, [data]);


   return (
    <>
      <Select
                label="Select Page"
                style={{padding:'10px'}}
                options={optionsValues}
                onChange={handleSelectChange}
                value={selected}
            />
    </>
  );
}
