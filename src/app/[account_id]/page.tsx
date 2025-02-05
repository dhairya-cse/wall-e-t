type PageProps = { params: Promise<{ account_id: string }>};

export default async function Page({ params }: PageProps) {
    const account_id: string = (await params).account_id;
    return <>
        {account_id}
    </>;
}