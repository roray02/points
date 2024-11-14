import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus, RotateCcw } from 'lucide-react';

const PointsCounter = () => {
  const [rohanPoints, setRohanPoints] = useState(100000);
  const [urviPoints, setUrviPoints] = useState(350);

  const resetScores = () => {
    setRohanPoints(100000);
    setUrviPoints(350);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Rohan vs Urvi</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Rohan's Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-blue-600">Rohan</h2>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => setRohanPoints(prev => Math.max(0, prev - 1))}
                className="bg-red-50 hover:bg-red-100"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-2xl font-bold w-32 text-center text-blue-600">{rohanPoints.toLocaleString()}</span>
              <Button 
                variant="outline"
                onClick={() => setRohanPoints(prev => prev + 1)}
                className="bg-green-50 hover:bg-green-100"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Urvi's Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-purple-600">Urvi</h2>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => setUrviPoints(prev => Math.max(0, prev - 1))}
                className="bg-red-50 hover:bg-red-100"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-2xl font-bold w-32 text-center text-purple-600">{urviPoints.toLocaleString()}</span>
              <Button 
                variant="outline"
                onClick={() => setUrviPoints(prev => prev + 1)}
                className="bg-green-50 hover:bg-green-100"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-4 flex justify-center">
            <Button 
              variant="outline" 
              onClick={resetScores}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset Scores</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsCounter;
