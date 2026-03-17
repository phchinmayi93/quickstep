"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewEnrollment() {

  const params = useParams();
  const id = params?.id;

  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!id) return;

    const fetchStudent = async () => {

      try {

        const res = await fetch(`/api/admin/enrollments/${id}`);
        const data = await res.json();

        if (data.success) {
          setStudent(data.data);
        }

      } catch (error) {
        console.log(error);
      }

      setLoading(false);

    };

    fetchStudent();

  }, [id]);



  if (loading) {
    return (
      <div className="p-10 text-lg font-semibold">
        Loading...
      </div>
    );
  }



  if (!student) {
    return (
      <div className="p-10 text-red-600">
        Student not found
      </div>
    );
  }



  const totalFee = Number(student.courseFee || 0);

  const paid =
    student.installments?.reduce(
      (sum: number, i: any) => sum + Number(i.amount || 0),
      0
    ) || 0;

  const balance = totalFee - paid;



  return (

    <div className="p-10 bg-gray-50 min-h-screen">

      {/* Title */}

      <h1 className="text-3xl font-bold text-[#00006c] mb-8">
        Student Enrollment Details
      </h1>



      {/* Student Info Card */}

      <div className="bg-white shadow-lg rounded-xl p-8 grid md:grid-cols-2 gap-6">

        <p><b>Name:</b> {student.name}</p>

        <p><b>Phone:</b> {student.phone}</p>

        <p><b>Email:</b> {student.email}</p>

        <p><b>Course:</b> {student.courseTitle}</p>

        <p><b>Course Fee:</b> ₹{totalFee}</p>

        <p><b>Paid:</b> ₹{paid}</p>

        <p className="text-red-600 font-semibold">
          <b>Balance:</b> ₹{balance}
        </p>

        <p><b>Duration:</b> {student.duration} Months</p>

      </div>



      {/* Installments */}

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Installments
      </h2>



      <div className="bg-white shadow rounded-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-200">

            <tr>

              <th className="p-4 border">Installment</th>
              <th className="p-4 border">Amount</th>
              <th className="p-4 border">Date</th>

            </tr>

          </thead>

          <tbody>

            {student.installments?.length > 0 ? (

              student.installments.map((inst: any, index: number) => (

                <tr key={index} className="text-center">

                  <td className="p-4 border">{index + 1}</td>

                  <td className="p-4 border">
                    ₹{inst.amount}
                  </td>

                  <td className="p-4 border">
                    {inst.date}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan={3} className="p-6 text-center text-gray-500">
                  No installments added yet
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>



      {/* Fee Progress */}

      <div className="mt-8 bg-white p-6 shadow rounded-lg">

        <h3 className="font-semibold mb-3">
          Fee Progress
        </h3>

        <div className="w-full bg-gray-200 h-4 rounded">

          <div
            className="bg-green-500 h-4 rounded"
            style={{
              width: `${(paid / totalFee) * 100 || 0}%`
            }}
          />

        </div>

        <p className="mt-2 text-sm">
          ₹{paid} / ₹{totalFee}
        </p>

      </div>



    </div>

  );

}