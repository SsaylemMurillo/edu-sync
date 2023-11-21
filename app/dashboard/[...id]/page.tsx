'use client';

export default function DashboardPage({ params }){
    console.log(params);
    return <div>Home of {params.id} - Edusync</div>
}