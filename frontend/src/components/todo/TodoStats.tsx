import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface TodoStatsProps {
  stats: {
    total: number;
    completed: number;
    pending: number;
  };
  onClearCompleted: () => void;
}

const TodoStats = ({ stats, onClearCompleted }: TodoStatsProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Todo Statistics</CardTitle>
            <CardDescription className="space-y-1">
              <div>Total: {stats.total}</div>
              <div>Completed: {stats.completed}</div>
              <div>Pending: {stats.pending}</div>
            </CardDescription>
          </div>
          {stats.completed > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearCompleted}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              Clear Completed
            </Button>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default TodoStats;
